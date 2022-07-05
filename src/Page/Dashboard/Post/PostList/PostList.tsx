/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postSliceActions } from '../../../../Lib/Store/Post/Post.slice';

export default function PostListPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postSliceActions.getPosts());
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
          <tr className='text-gray-700'>
            <td className='border-b-2 p-4 dark:border-dark-5'>1</td>
            <td className='border-b-2 p-4 dark:border-dark-5'>Jean Marc</td>
            <td className='border-b-2 p-4 dark:border-dark-5'>Louis</td>
            <td className='border-b-2 p-4 dark:border-dark-5'>Jl987</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
