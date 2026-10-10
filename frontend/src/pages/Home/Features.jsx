import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import card3 from "../../assets/card3.svg";
import card4 from "../../assets/card4.svg";

const Features = () => {
  return (
    <div className="mx-auto mb-15  grid w-full max-w-[1200px] gap-5 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
      <Card
        sx={{
          width: "100%",
          height: "100%",
          border: "1px solid #e5e7eb",
          borderRadius: "16px",
          boxShadow: "none",
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={card1}
            alt="green iguana"
            sx={{
              height: 180,
              objectFit: "contain",
              p: 2,
              transition: "transform 0.4s ease-in-out",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
          <CardContent sx={{ borderTop: "1px solid #e5e7eb" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize: "1rem", fontWeight: "bold", pl: "4px" }}
            >
              Text, Images, Videos, and Audio
            </Typography>
            <Typography
              variant="body2"
              sx={{
                width: "100%",
                color: "text.secondary",
                lineHeight: 1.7,
                pl: 1,
                
              }}
            >
              Reliable AI models via our distributed infrastructure. Fall back
              to other providers when one goes down.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", minHeight: 48, px: 2, pb: 2 }}>
          <Button
            sx={{
              textTransform: "none",
              textDecoration: "underline",
              color: "black",
              ":hover": { color: "blue", textDecoration: "underline" },
            }}
          >
            Browser all
          </Button>
        </CardActions>
      </Card>

      <Card
        sx={{
          width: "100%",
          height: "100%",
          border: "1px solid #e5e7eb",
          borderRadius: "16px",
          boxShadow: "none",
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={card2}
            alt="green iguana"
            sx={{
              height: 180,
              objectFit: "contain",
              p: 2,
              transition: "transform 0.4s ease-in-out",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
          <CardContent sx={{ borderTop: "1px solid #e5e7eb" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize: "1rem", fontWeight: "bold", pl: "4px" }}
            >
              Higher Availability
            </Typography>
            <Typography
              variant="body2"
              sx={{
                width: "100%",
                color: "text.secondary",
                lineHeight: 1.7,
                pl: 1,
                
              }}
            >
              Reliable AI models via our distributed infrastructure. Fall back
              to other providers when one goes down.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", minHeight: 48, px: 2, pb: 2 }}>
          <Button
            sx={{
              textTransform: "none",
              textDecoration: "underline",
              color: "black",
              ":hover": { color: "blue", textDecoration: "underline" },
            }}
          >
            Learn more
          </Button>
        </CardActions>
      </Card>

      <Card
        sx={{
          width: "100%",
          height: "100%",
          border: "1px solid #e5e7eb",
          borderRadius: "16px",
          boxShadow: "none",
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={card3}
            alt="green iguana"
            sx={{
              height: 180,
              objectFit: "contain",
              p: 2,
              transition: "transform 0.4s ease-in-out",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
          <CardContent sx={{ borderTop: "1px solid #e5e7eb" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize: "1.1rem", fontWeight: "bold", pl: "4px" }}
            >
              Price and Performance
            </Typography>
            <Typography
              variant="body2"
              sx={{
                width: "100%",
                color: "text.secondary",
                lineHeight: 1.7,
                pl: 1,
              }}
            >
              Keep costs in check without sacrificing speed. OpenRouter runs at
              the edge for minimal latency between your users and their
              inference.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", minHeight: 48, px: 2, pb: 2 }}>
          <Button
            sx={{
              textTransform: "none",
              textDecoration: "underline",
              color: "black",
              ":hover": { color: "blue", textDecoration: "underline" },
            }}
          >
            Learn more
          </Button>
        </CardActions>
      </Card>

      <Card
        sx={{
          width: "100%",
          height: "100%",
          border: "1px solid #e5e7eb",
          borderRadius: "16px",
          boxShadow: "none",
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={card4}
            alt="green iguana"
            sx={{
              height: 180,
              objectFit: "contain",
              p: 2,
              transition: "transform 0.4s ease-in-out",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
          <CardContent sx={{ borderTop: "1px solid #e5e7eb" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize: "1.1rem", fontWeight: "bold", pl: "4px" }}
            >
              Custom Data Policies
            </Typography>
            <Typography
              variant="body2"
              sx={{
                width: "100%",
                color: "text.secondary",
                lineHeight: 1.7,
                pl: 1,
              }}
            >
              rotect your organization with fine grained data policies. Ensure
              prompts only go to the models and providers you trust.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", minHeight: 48, px: 2, pb: 2 }}>
          <Button
            sx={{
              textTransform: "none",
              textDecoration: "underline",
              color: "black",
              ":hover": { color: "blue", textDecoration: "underline" },
            }}
          >
            View docs
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Features;
