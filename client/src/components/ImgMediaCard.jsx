import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
export default function ImgMediaCard({ el, deleteBlog }) {
  const { title, text, _id, reviews } = el;

  return (
    <Card sx={{ maxWidth: 400, padding: "15px" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            deleteBlog(_id);
          }}
          style={{ border: "1px solid red", color: "red" }}
        >
          Delete
        </Button>
        <Button size="small" style={{ border: "1px solid blue" }}>
          <Link
            to={`/update/${el._id}`}
            style={{ textDecoration: "none", color: "blue" }}
          >
            Update
          </Link>
        </Button>
        <Button size="small" style={{ border: "1px solid green" }}>
          <Link
            to={`/create-review/${el._id}`}
            style={{ textDecoration: "none", color: "green" }}
          >
            Create-Review
          </Link>
        </Button>
      </CardActions>

      {reviews.length > 0 && (
        <Typography
          gutterBottom
          variant="p"
          component="div"
          style={{ marginLeft: "10px", marginTop: "20px" }}
        >
          Reviews:
        </Typography>
      )}

      {reviews.length > 0 &&
        reviews.map((el, i) => (
          <ul key={i}>
            <li>{el.description}</li>
          </ul>
        ))}
    </Card>
  );
}
