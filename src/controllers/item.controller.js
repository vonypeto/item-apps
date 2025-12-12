let items = [
  { id: 1, name: "Item One" },
  { id: 2, name: "Item Two" },
];

const pageSizeOptions = [5, 10, 20, 50, 100];

function createItem(req, res) {
  try {
    const data = req.body;
    if (!data.name) throw new Error("Name required");
    const newItem = {
      id: items.length ? items[items.length - 1].id + 1 : 1,
      name: data.name,
    };
    items.push(newItem);
    res.status(201).json(newItem);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

function getItems(req, res) {
  let { search = "", pageSize = 10, page = 0 } = req.query;
  pageSize = parseInt(pageSize);
  page = parseInt(page);
  if (!pageSizeOptions.includes(pageSize)) pageSize = pageSizeOptions[0];

  let filtered = items;
  if (search) {
    filtered = filtered.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  const paged = filtered.slice(page * pageSize, (page + 1) * pageSize);
  res.status(200).json({ items: paged, total: filtered.length });
}

module.exports = {
  createItem,
  getItems,
};
