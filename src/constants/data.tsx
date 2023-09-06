export const contentsList = ["Topics", "Recommended Books", "Useful Resources"];

type YearsProps = "First" | "Second" | "Third" | "Fourth";
export const YEARS: YearsProps[] = ["First", "Second", "Third", "Fourth"];

export type YearCourseProps = {
  course: string;
  done: boolean;
}[];

export type CoursesProps = Record<YearsProps, YearCourseProps>;

const setCourseData = (course: string) => ({ course, done: false });

export const FIRST_YEAR_COURSES = [
  "Algebra",
  "Applied Electricity",
  "Inorganic Chemistry for Engineers",
  "Technical Drawing",
  "Practical Chemistry",
  "Organic Chemistry for Engineers",
  "Communication Skills I & II",
  "General Physics",
  "Calculus with Analysis",
  "Basic Mechanics",
  "Physical Chemistry for Engineers",
  "Basic Electronics",
  "Introduction to Information Technology",
];
export const SECOND_YEAR_COURSES = [
  "Chemical Process Calculations I & II",
  "Chemical Engineering Thermodynamics I & II",
  "Fluid Transport",
  "Analytical Chemistry for Chemical Engineers",
  "Chemical Process Industries",
  "Computer Application for Engineers",
  "Differential Equations",
  "Engineering In Society",
  "Heat Transfer Processes",
  "Calculus of Several Variables",
  "Drawing for Engineers",
  "Strength of Materials",
  "Practical Chemistry II",
];
export const THIRD_YEAR_COURSES = [
  "Experimental Data Analysis",
  "Mass Transfer Process",
  "Mechanical Separation Processes",
  "Chemical Engineering Laboratory I",
  "Natural Gas",
  "Polymer Technology",
  "Silicate I & II",
  "Fertilizer Technology",
  "French I & II",
  "Introduction to Economics I & II",
  "Process Development Project I & II",
  "Simultaneous Heat & Mass Transfer",
  "Chemical Reaction Engineering",
  "Food Processing Technology",
  "Packaging Technology",
  "Numerical Methods for Engineers",
  "Material Science",
];
export const FOURTH_YEAR_COURESES = ["Plant Design Project I & II"];

export const COURSES: CoursesProps = {
  First: FIRST_YEAR_COURSES.map((course) => setCourseData(course)),
  Second: SECOND_YEAR_COURSES.map((course) => setCourseData(course)),
  Third: THIRD_YEAR_COURSES.map((course) => setCourseData(course)),
  Fourth: FOURTH_YEAR_COURESES.map((course) => setCourseData(course)),
};
