const api = async (req, res) => {
  const { m } = req.query;
  await setTimeout(() => {
    console.log('sending respones now');
    res.status(200).json({ name: 'John Doe' })
  }, 1000 * (m || 1));
};

export default api;
