import { Router } from "itty-router";
import deleteCourses from "./handlers/deleteCourses";
import getAllCourses from "./handlers/getAllCourses";
import getCourse from "./handlers/getCourse";
import submitCourse from "./handlers/submitCourse";
import updateCourses from "./handlers/updateCourses";

const router = Router({ base: "/api" });

router
  .post("/submit", submitCourse)
  .get("/:id", getCourse)
  .get("/", getAllCourses)
  .patch("/update", updateCourses)
  .delete("/delete/:id", deleteCourses);

export const handleRequest = async (Request) => {
  return router.handle(Request);
};
