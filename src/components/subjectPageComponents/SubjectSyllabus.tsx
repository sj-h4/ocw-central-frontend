import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import { Subject } from "@/gqltypes/subject";

export function SubjectSyllabus({ subject }: { subject: Subject }) {
  const syllabus = subject.syllabus;

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="subject details">
          <TableHead>
            <TableRow>
              {syllabus?.academicYear !== 0 && (
                <TableCell>
                  <b>開講年度・開講期</b>
                </TableCell>
              )}
              {syllabus?.semester && (
                <TableCell>
                  <b>開講学期</b>
                </TableCell>
              )}
              {syllabus?.numCredit !== 0 && (
                <TableCell>
                  <b>単位数</b>
                </TableCell>
              )}
              {syllabus?.assignedGrade && (
                <TableCell>
                  <b>配当学年</b>
                </TableCell>
              )}
              {syllabus?.courseFormat && (
                <TableCell>
                  <b>授業形態</b>
                </TableCell>
              )}
              {syllabus?.targetedAudience && (
                <TableCell>
                  <b>対象学生</b>
                </TableCell>
              )}
              {syllabus?.language && (
                <TableCell>
                  <b>使用言語</b>
                </TableCell>
              )}
              {syllabus?.courseDayPeriod && (
                <TableCell>
                  <b>曜時限</b>
                </TableCell>
              )}
              {syllabus?.faculty && (
                <TableCell>
                  <b>教員</b>
                </TableCell>
              )}
              {syllabus?.outline && (
                <TableCell>
                  <b>授業概要</b>
                </TableCell>
              )}
              {syllabus?.objective && (
                <TableCell>
                  <b>授業の概要・目的</b>
                </TableCell>
              )}
              {syllabus?.lessonPlan && (
                <TableCell>
                  <b>授業計画と内容</b>
                </TableCell>
              )}
              {syllabus?.gradingMethod && (
                <TableCell>
                  <b>成績評価の方法・観点</b>
                </TableCell>
              )}
              {syllabus?.courseRequirement && (
                <TableCell>
                  <b>履修要件</b>
                </TableCell>
              )}
              {syllabus?.outClassLearning && (
                <TableCell>
                  <b>授業外学習（予習・復習）等</b>
                </TableCell>
              )}
              {syllabus?.reference && (
                <TableCell>
                  <b>教科書・参考書等</b>
                </TableCell>
              )}
            </TableRow>
            <TableRow>
              {(syllabus?.academicYear || syllabus?.academicYear !== 0) && (
                <TableCell>{syllabus?.academicYear}</TableCell>
              )}
              {syllabus?.semester && <TableCell>{syllabus.semester}</TableCell>}
              {(syllabus?.numCredit || syllabus?.numCredit !== 0) && (
                <TableCell>{syllabus?.numCredit}</TableCell>
              )}
              {syllabus?.assignedGrade && (
                <TableCell>{syllabus.assignedGrade}</TableCell>
              )}
              {syllabus?.courseFormat && (
                <TableCell>{syllabus.courseFormat}</TableCell>
              )}
              {syllabus?.targetedAudience && (
                <TableCell>{syllabus.targetedAudience}</TableCell>
              )}
              {syllabus?.language && <TableCell>{syllabus.language}</TableCell>}
              {syllabus?.courseDayPeriod && (
                <TableCell>{syllabus.courseDayPeriod}</TableCell>
              )}
              {syllabus?.faculty && (
                <TableCell>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: syllabus.faculty,
                    }}
                  ></div>
                </TableCell>
              )}
              {syllabus?.outline && (
                <TableCell>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: syllabus.outline,
                    }}
                  ></div>
                </TableCell>
              )}
              {syllabus?.objective && (
                <TableCell>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: syllabus.objective,
                    }}
                  ></div>
                </TableCell>
              )}
              {syllabus?.lessonPlan && (
                <TableCell>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: syllabus.lessonPlan,
                    }}
                  ></div>
                </TableCell>
              )}
              {syllabus?.gradingMethod && (
                <TableCell>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: syllabus.gradingMethod,
                    }}
                  ></div>
                </TableCell>
              )}
              {syllabus?.courseRequirement && (
                <TableCell>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: syllabus.courseRequirement,
                    }}
                  ></div>
                </TableCell>
              )}
              {syllabus?.outClassLearning && (
                <TableCell>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: syllabus.outClassLearning,
                    }}
                  ></div>
                </TableCell>
              )}
              {syllabus?.reference && (
                <TableCell>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: syllabus.reference,
                    }}
                  ></div>
                </TableCell>
              )}
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Box>
  );
}
