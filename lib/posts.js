import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postDir = path.join(process.cwd(), 'posts');

// /posts配下のマークダウンファイルを全て読み込んでid:ファイル名とfront matterをreturnする関数
export const getAllPostsData = () => {
  const fileNames = fs.readdirSync(postDir);
  const allPostData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md/, '');

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

export const getPaths = () => {
  const fileNames = fs.readdirSync(postDir);
  const allPostData = fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md/, ''),
      }
    }
  })

  // 上記paramオブジェクトの配列をreturnする [{params: {id: fileName}}, {params: {id: fileName}}, ...]
  return allPostData
}

export const getPostData = async (id) => {
  const filePath = path.join(postDir, `${id}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const matterResult = matter(fileContents);

  const contentOfRemark = await remark()
    .use(html)
    .process(matterResult.content)

  const contentOfHtml = contentOfRemark.toString();

  return {
    data: matterResult.data,
    content: contentOfHtml,
  }
};