import { useGetAllSemestersQuery } from "../../../redux/features/academicSemister/academicSemisterApi";

const AcademicSemester = () => {
    const data = useGetAllSemestersQuery(undefined)
    console.log(data);
   return <div>Academic Semester page</div>;
};

export default AcademicSemester;
