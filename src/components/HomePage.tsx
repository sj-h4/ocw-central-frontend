import { alpha, Box } from "@mui/material";
import { Loading } from "@/components/common/Loading";
import { SubjectCard } from "@/components/searchPageComponents/SubjectCard";
import { useRandomSubjectQuery } from "@/generated/graphql";
import { theme } from "@/utils/themes";
import { Divider, Grid, Typography } from "@mui/material";
import { ReactComponent as OwlImg } from "@/assets/ocwc-owl.svg";

export function HomePage() {
  const GridRandomItems: JSX.Element[] = [];

  const { data, loading, error } = useRandomSubjectQuery({
    variables: {},
  });

  if (loading) {
    return <Loading size={"7em"} color={"primary"} />;
  }
  if (error) {
    return <div>Failed to fetch random lectures.</div>;
  }
  if (!data) {
    return <div>該当講義がありません</div>;
  }
  if (data) {
    data.randomSubjects.map((subject) => {
      GridRandomItems.push(
        <SubjectCard
          id={subject.id}
          title={subject.title}
          faculty={subject.faculty}
          thumbnailLink={subject.thumbnailLink}
        />
      );
    });
  }
  return (
    <Box
      className="HomePage"
      alignItems="center"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid
        container
        sx={{
          height: {
            xs: 200,
            sm: 300,
            md: 400,
            lg: 300,
          },
          marginTop: "1em",
          width: {
            xs: "100%",
            md: "80%",
          },
          p: {
            xs: 1,
            md: 4,
          },
          backgroundColor: alpha(theme.palette.primary.main, 1),
          borderColor: alpha(theme.palette.primary.main, 1),
          borderWidth: 20,
          borderRadius: 2,
        }}
      >
        <Grid
          item
          md={7}
          sm={12}
          xs={12}
          sx={{
            px: {
              xs: 2,
              md: 5,
              ld: 10,
            },
            py: {
              xs: 2,
              md: 2,
            },
            m: {
              xs: 2,
              md: 0,
            },
          }}
        >
          <Typography
            sx={{
              typography: { xs: "h4", sm: "h2" },
              textAlign: "center",
              color: "white",
              mb: {
                xs: 2,
                md: 4,
              },
            }}
          >
            <b>
              Welcome to <br />
              OCW Central!
            </b>
          </Typography>
        </Grid>
        <Grid
          item
          md={5}
          xs={0}
          sm={0}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
            },
          }}
        >
          <OwlImg
            style={{
              width: "200px",
              height: "250px",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ height: "100%", alignSelf: "center", justifyContent: "center" }}
      >
        <Grid item xs={12} md={15}>
          <Box
            sx={{
              m: {
                xs: 0,
                md: 4,
              },
              mb: 2,
              pt: 1,
            }}
          >
            <Typography
              variant="h5"
              component="div"
              align="left"
              sx={{ color: "black" }}
            >
              <b>Feeling Lucky</b>
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container>{GridRandomItems}</Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
