const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');

app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);

