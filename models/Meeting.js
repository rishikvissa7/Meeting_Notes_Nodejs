const mongoose = require('mongoose');

const MeetingSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter Notes name"],
        },

        description: {
            type: String,
            required: [true, "Enter notes"]
        }
    },
    {
        timestapms: true,
    }
);

const Meeting = mongoose.model("Notes", MeetingSchema);

module.exports = Meeting;