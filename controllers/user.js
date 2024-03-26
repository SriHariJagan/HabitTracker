const Habit = require('../models/HabitSchema');
const User = require('../models/userSchema');

// Function to get date string for a given offset
function getDateString(offset) {
    let d = new Date();
    d.setDate(d.getDate() + offset);
    const date = d.toISOString().split('T')[0];
    let day;
    switch (d.getDay()) {
        case 0: day = 'Sun'; break;
        case 1: day = 'Mon'; break;
        case 2: day = 'Tue'; break;
        case 3: day = 'Wed'; break;
        case 4: day = 'Thu'; break;
        case 5: day = 'Fri'; break;
        case 6: day = 'Sat'; break;
    }
    return { date, day ,status : 'default'};
}

// Generate an array of date strings for the current week
var days = [];
days.push(getDateString(-6));
days.push(getDateString(-5));
days.push(getDateString(-4));
days.push(getDateString(-3));
days.push(getDateString(-2));
days.push(getDateString(-1));
days.push(getDateString(0));

// Controller function for rendering the user's home page
module.exports.userHomePage = async (req, res) => {
    try {
        console.log(req.user._id)
        const habit = await Habit.find({ user: req.user._id });
        console.log(habit)
        return res.render('homePage', { dates: days, habits: habit });
    } catch (err) {
        console.log(err);
    }
};

// Controller function for updating user's preferred view (daily/weekly)
module.exports.view = async (req, res) => {
    try {
        let user = await User.findByIdAndUpdate(req.user._id);
        if (user) {
            user.view = req.body.type;
            req.user.view = req.body.type;
            await user.save();
        }
        return res.redirect('/user');
    } catch (err) {
        console.error(err);
        return;
    }
};

// Controller function for creating a new habit
module.exports.habit = async (req, res) => {
    try {
        const newhabit = {
            habitName: req.body.habitName,
            user: req.user._id
        };
        const habit = await Habit.findOne({ habitName: req.body.habitName });
        if (!habit) {
            await Habit.create(newhabit);
            console.log(req.user._id);
        }
        return res.redirect('back');
    } catch (err) {
        console.log("error in creating habit", err);
        return;
    }
};

// Controller function for updating habit status (done/not done)
module.exports.habitStatus = async (req, res) => {
    try {
        const userDate = req.params.date;
        const habit = await Habit.findById(req.params.id);

        let dates = habit.dates;
        let found = false;

        dates.find(function (item, index) {
            if (item.date === userDate) {
                if (item.status === 'yes') {
                    item.status = 'no';
                } else if (item.status === 'no') {
                    item.status = 'none';
                } else if (item.status === 'none') {
                    item.status = 'yes';
                }
                found = true;
            }
        });

        if (!found) {
            dates.push({ date: req.params.date, day: req.params.day, status: 'yes' });
        }

        habit.dates = dates;
        await habit.save();
        res.redirect('back');
    } catch (err) {
        console.error(err);
    }
};


// Controller function for deleting habit.

module.exports.deletHabit = async (req, res) => {
    try {
        const habit = await Habit.findByIdAndDelete(req.params.id);
        if (habit) {
            console.log("Habit deleted:", habit);
        }
            console.log("Habit not found or could not be deleted.");
            return res.redirect("back");
    } catch (err) {
        console.log("Error deleting habit:", err);
    }
};
