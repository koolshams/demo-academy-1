const db = require('../models');
const Users = db.users;

const Courses = db.courses;

const Grades = db.grades;

const Meetings = db.meetings;

const Messages = db.messages;

const Organizations = db.organizations;

const CoursesData = [
  {
    title: 'Introduction to Psychology',

    description: 'A foundational course in psychology.',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    title: 'Advanced Mathematics',

    description: 'An in-depth study of mathematical concepts.',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    title: 'Modern Art History',

    description: 'Exploration of art movements from the 20th century.',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    title: 'Computer Science Basics',

    description: 'Introduction to computer science principles.',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const GradesData = [
  {
    value: 85.5,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    value: 92,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    value: 78,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    value: 88.5,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const MeetingsData = [
  {
    start_time: new Date('2023-11-01T10:00:00'),

    end_time: new Date('2023-11-01T11:00:00'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    start_time: new Date('2023-11-02T14:00:00'),

    end_time: new Date('2023-11-02T15:00:00'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    start_time: new Date('2023-11-03T09:00:00'),

    end_time: new Date('2023-11-03T10:00:00'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    start_time: new Date('2023-11-04T13:00:00'),

    end_time: new Date('2023-11-04T14:00:00'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const MessagesData = [
  {
    content: 'Can you help me with my assignment?',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Please review the course materials.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Meeting scheduled for next week.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Your grades have been updated.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const OrganizationsData = [
  {
    name: 'Greenfield University',
  },

  {
    name: 'Blue Ridge College',
  },

  {
    name: 'Sunset Institute',
  },

  {
    name: 'Maple Leaf Academy',
  },
];

// Similar logic for "relation_many"

async function associateUserWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setOrganization) {
    await User0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setOrganization) {
    await User1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setOrganization) {
    await User2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User3 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (User3?.setOrganization) {
    await User3.setOrganization(relatedOrganization3);
  }
}

// Similar logic for "relation_many"

async function associateCourseWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Course0 = await Courses.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Course0?.setOrganization) {
    await Course0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Course1 = await Courses.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Course1?.setOrganization) {
    await Course1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Course2 = await Courses.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Course2?.setOrganization) {
    await Course2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Course3 = await Courses.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Course3?.setOrganization) {
    await Course3.setOrganization(relatedOrganization3);
  }
}

async function associateGradeWithStudent() {
  const relatedStudent0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Grade0 = await Grades.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Grade0?.setStudent) {
    await Grade0.setStudent(relatedStudent0);
  }

  const relatedStudent1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Grade1 = await Grades.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Grade1?.setStudent) {
    await Grade1.setStudent(relatedStudent1);
  }

  const relatedStudent2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Grade2 = await Grades.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Grade2?.setStudent) {
    await Grade2.setStudent(relatedStudent2);
  }

  const relatedStudent3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Grade3 = await Grades.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Grade3?.setStudent) {
    await Grade3.setStudent(relatedStudent3);
  }
}

async function associateGradeWithCourse() {
  const relatedCourse0 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Grade0 = await Grades.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Grade0?.setCourse) {
    await Grade0.setCourse(relatedCourse0);
  }

  const relatedCourse1 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Grade1 = await Grades.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Grade1?.setCourse) {
    await Grade1.setCourse(relatedCourse1);
  }

  const relatedCourse2 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Grade2 = await Grades.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Grade2?.setCourse) {
    await Grade2.setCourse(relatedCourse2);
  }

  const relatedCourse3 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Grade3 = await Grades.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Grade3?.setCourse) {
    await Grade3.setCourse(relatedCourse3);
  }
}

async function associateGradeWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Grade0 = await Grades.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Grade0?.setOrganization) {
    await Grade0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Grade1 = await Grades.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Grade1?.setOrganization) {
    await Grade1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Grade2 = await Grades.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Grade2?.setOrganization) {
    await Grade2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Grade3 = await Grades.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Grade3?.setOrganization) {
    await Grade3.setOrganization(relatedOrganization3);
  }
}

async function associateMeetingWithCounselor() {
  const relatedCounselor0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Meeting0 = await Meetings.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Meeting0?.setCounselor) {
    await Meeting0.setCounselor(relatedCounselor0);
  }

  const relatedCounselor1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Meeting1 = await Meetings.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Meeting1?.setCounselor) {
    await Meeting1.setCounselor(relatedCounselor1);
  }

  const relatedCounselor2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Meeting2 = await Meetings.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Meeting2?.setCounselor) {
    await Meeting2.setCounselor(relatedCounselor2);
  }

  const relatedCounselor3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Meeting3 = await Meetings.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Meeting3?.setCounselor) {
    await Meeting3.setCounselor(relatedCounselor3);
  }
}

async function associateMeetingWithStudent() {
  const relatedStudent0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Meeting0 = await Meetings.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Meeting0?.setStudent) {
    await Meeting0.setStudent(relatedStudent0);
  }

  const relatedStudent1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Meeting1 = await Meetings.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Meeting1?.setStudent) {
    await Meeting1.setStudent(relatedStudent1);
  }

  const relatedStudent2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Meeting2 = await Meetings.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Meeting2?.setStudent) {
    await Meeting2.setStudent(relatedStudent2);
  }

  const relatedStudent3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Meeting3 = await Meetings.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Meeting3?.setStudent) {
    await Meeting3.setStudent(relatedStudent3);
  }
}

async function associateMeetingWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Meeting0 = await Meetings.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Meeting0?.setOrganization) {
    await Meeting0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Meeting1 = await Meetings.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Meeting1?.setOrganization) {
    await Meeting1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Meeting2 = await Meetings.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Meeting2?.setOrganization) {
    await Meeting2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Meeting3 = await Meetings.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Meeting3?.setOrganization) {
    await Meeting3.setOrganization(relatedOrganization3);
  }
}

async function associateMessageWithSender() {
  const relatedSender0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Message0 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Message0?.setSender) {
    await Message0.setSender(relatedSender0);
  }

  const relatedSender1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Message1 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Message1?.setSender) {
    await Message1.setSender(relatedSender1);
  }

  const relatedSender2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Message2 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Message2?.setSender) {
    await Message2.setSender(relatedSender2);
  }

  const relatedSender3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Message3 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Message3?.setSender) {
    await Message3.setSender(relatedSender3);
  }
}

async function associateMessageWithReceiver() {
  const relatedReceiver0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Message0 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Message0?.setReceiver) {
    await Message0.setReceiver(relatedReceiver0);
  }

  const relatedReceiver1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Message1 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Message1?.setReceiver) {
    await Message1.setReceiver(relatedReceiver1);
  }

  const relatedReceiver2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Message2 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Message2?.setReceiver) {
    await Message2.setReceiver(relatedReceiver2);
  }

  const relatedReceiver3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Message3 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Message3?.setReceiver) {
    await Message3.setReceiver(relatedReceiver3);
  }
}

async function associateMessageWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Message0 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Message0?.setOrganization) {
    await Message0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Message1 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Message1?.setOrganization) {
    await Message1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Message2 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Message2?.setOrganization) {
    await Message2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Message3 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Message3?.setOrganization) {
    await Message3.setOrganization(relatedOrganization3);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Courses.bulkCreate(CoursesData);

    await Grades.bulkCreate(GradesData);

    await Meetings.bulkCreate(MeetingsData);

    await Messages.bulkCreate(MessagesData);

    await Organizations.bulkCreate(OrganizationsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithOrganization(),

      // Similar logic for "relation_many"

      await associateCourseWithOrganization(),

      await associateGradeWithStudent(),

      await associateGradeWithCourse(),

      await associateGradeWithOrganization(),

      await associateMeetingWithCounselor(),

      await associateMeetingWithStudent(),

      await associateMeetingWithOrganization(),

      await associateMessageWithSender(),

      await associateMessageWithReceiver(),

      await associateMessageWithOrganization(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('courses', null, {});

    await queryInterface.bulkDelete('grades', null, {});

    await queryInterface.bulkDelete('meetings', null, {});

    await queryInterface.bulkDelete('messages', null, {});

    await queryInterface.bulkDelete('organizations', null, {});
  },
};
