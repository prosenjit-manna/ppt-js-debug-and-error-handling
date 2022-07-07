/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../Lib/Store/hooks';
import { postSliceActions } from '../../../../Lib/Store/Post/Post.slice';

export default function PostListPage() {
  const dispatch = useDispatch();
  const postLists = useAppSelector(state => state.post.posts);

  useEffect(() => {
    dispatch(postSliceActions.getPosts(postLists));
    console.log('test');
  }, [dispatch]);

  return (
    <div>
      <table className='table p-4 bg-white shadow rounded-lg w-full text-left'>
        <thead>
          <tr>
            <th className='border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900'>#</th>
            <th className='border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900'>
              First name
            </th>
            <th className='border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900'>Last name</th>
            <th className='border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900'>Username</th>
          </tr>
        </thead>
        <tbody>
        {postLists.map(i => {
          return (
            <tr className='text-gray-700'>
            <td className='border-b-2 p-4 dark:border-dark-5'>{i.id}</td>
            <td className='border-b-2 p-4 dark:border-dark-5'>{i.title}</td>
            <td className='border-b-2 p-4 dark:border-dark-5'>{i.body}</td>
            <td className='border-b-2 p-4 dark:border-dark-5'>{i.userId}</td>
          </tr>
          );
        })}
          
        </tbody>
      </table>
    </div>
  );
}
