import { Routes, Route } from 'react-router-dom';

import Main from './Main';
import Users from './Users';

const Pages = () => (
    <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Main />} />
    </Routes>
);

export default Pages;
