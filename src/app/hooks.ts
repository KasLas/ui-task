import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const AppUseDispatch = () => useDispatch<AppDispatch>();
export const AppUseSelector: TypedUseSelectorHook<RootState> = useSelector;
