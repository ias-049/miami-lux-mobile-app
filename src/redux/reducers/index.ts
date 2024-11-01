import {combineReducers} from '@reduxjs/toolkit';
import {authApis} from '../apis/auth';
import generalSlice from './generalSlice';
import userSlice from './userSlice';

export const allReducers = combineReducers({
  generalSlice,
  userSlice,
});
