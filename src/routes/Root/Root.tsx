// Root.tsx

import { FC } from 'react';
import { GlobalHeader, RootWrapper } from './Root.style';
import { Link, Routes, Route } from 'react-router-dom';
import MainPage from '../MainPage/MainPage'; // Adjusted import for MainPage component

const Root: FC = () => {
    return (
        <RootWrapper data-testid="Root">
            <GlobalHeader data-testid="GlobalHeader">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {/* Removed the About and Contact links */}
                </ul>
            </GlobalHeader>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </RootWrapper>
    );
};

export default Root;