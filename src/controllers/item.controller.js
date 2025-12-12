const defaultItems = [
  { id: 1, name: "Item One" },
  { id: 2, name: "Item Two" },
];
let items = [...defaultItems];

const pageSizeOptions = [5, 10, 20, 50, 100];
function clearItems(req, res) {
  items = [...defaultItems];
  res.status(200).json({ message: "Items reset to default." });
}

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
  let { search = "" } = req.query;
  let filtered = items;
  if (search) {
    filtered = filtered.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  res.status(200).json({ items: filtered, total: filtered.length });
}

module.exports = {
  createItem,
  getItems,
  clearItems,
};
