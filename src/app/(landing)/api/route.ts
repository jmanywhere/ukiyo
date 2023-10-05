import path from "path";
import { promises as fs } from "fs";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "lotties");
  const lottieParam = request.nextUrl.searchParams.get('lottie')
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + "/"+lottieParam+".json",
    "utf8"
  );
  //Return the content of the data file in json format
  return Response.json({ lottie: JSON.parse(fileContents) })
}