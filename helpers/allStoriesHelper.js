import {JOB_STORY} from "~/constants/blogStories/job";
import {FLAT_STORY} from "~/constants/blogStories/flat";
import {PAPERS_STORY} from "~/constants/blogStories/papers";
import {COST_STORY} from "~/constants/blogStories/costs";
import {SCHOOL_STORY} from "~/constants/blogStories/school";
import {GENERAL_STORY} from "~/constants/blogStories/general";
import {CARS_STORY} from "~/constants/blogStories/cars";

const mergeAllStories = [...JOB_STORY, ...FLAT_STORY, ...PAPERS_STORY, ...COST_STORY, ...SCHOOL_STORY, ...GENERAL_STORY, ...CARS_STORY]
mergeAllStories.sort((a, b) => b.date - a.date)
export const allStoriesByNewestDate = () => {
  return mergeAllStories
}
export const getOneLatestStory = () => {
  return mergeAllStories[0]
}

export const allTags = () => {
  return [...new Set(mergeAllStories.map(e => e.tag))]
}
