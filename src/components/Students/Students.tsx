'use client';

import useStudents from '@/hooks/useStudents';
import useMutation from '@/hooks/useStudents';
import type StudentsInterface from '@/types/StudentInterface';
import styles from './Students.module.scss';
import Student from './Student/Student';

const Students = (): React.ReactElement => {
  const { students } = useStudents();

const onDeleteHandler = (id: number) => {
  const { deleteStudentMutate } = useMutation();
  console.log(id);
  }

  return (
    <div className={styles.Students}>
      {students.map((student: StudentsInterface) => (
        <Student
          key={student.id}
          student={student}
          onDelete={onDeleteHandler}
        />
      ))}
    </div>
  );
};

export default Students;
