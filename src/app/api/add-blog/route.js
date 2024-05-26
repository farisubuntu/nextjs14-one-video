import { connectToDatabase } from "@/database";
import Joi from "joi";
import { NextResponse } from "next/server";

// addNewBlog

const addNewBlog = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

export async function POST(request) {
  // const { title, content } = await request.json();
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     title,
  //     body: content,
  //     userId: 1,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // });
  // const data = await res.json();
  // return NextResponse.json(data);
  try {
    await connectToDatabase();
    const extractBlogData = await request.json();
    const { error } = addNewBlog.validate({
      title,
      description,
    });

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }
    // if no error, save data
    const newlyCreateBlogItem = await Blog.create(extractBlogData);
    if (newlyCreateBlogItem) {
      return NextResponse.json({
        success: true,
        data: "Blog created successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong",
      });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}
