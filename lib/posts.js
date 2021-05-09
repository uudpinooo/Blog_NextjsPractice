import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postDir = path.join(process.cwd(), 'posts');

export const getPostsData = () => {
  const fileNames = fs.readdirSync(postDir);
  const allPostData = fileNames.map(fileName => {
    const id = fileName.replace('/\.md/', '');

    const filePath = path.join(postDir, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf-8');

    const matterResult = matter(fileContents);

    // allPostDataの戻り値
    return {
      id: id,
      ...matterResult.data,
    }
  })

  // 関数getPostsDataの戻り値
  // 日付を比べて降順（新しい順）に並べている
  return allPostData.sort((a, b) => (a.date < b.date ? 1 : -1))
};