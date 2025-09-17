
export default function Menu() {
  const items = [
    { name: "Smoothie Bowl", price: 149 },
    { name: "Chia Pudding", price: 139 },
    { name: "Overnight Oats", price: 129 },
    { name: "Dry Fruit Bowl", price: 159 },
    { name: "Avocado Toast", price: 179 },
    { name: "Seasonal Fruit Mix", price: 149 },
    { name: "Protein Shake (Add-on)", price: 99 }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Menu</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
    </div>
  );
}
