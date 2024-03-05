import { config } from '../../config.js';

export default () => {
  fetch(`${config.url + "/order/all"}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${config.token}`,
    }
  })
  .then(response => response.json())
  .then(data => {
    let tableContent = '';
    data.forEach((order) => {
      tableContent += `
      <tr>
        <td>${order.id_order}</td>
        <td>${order.id_client}</td>
        <td>${order.id_picker}</td>
        <td>${order.order_state}</td>
        <td>${order.date}</td>
      </tr>
      `;
    });
    return `
      <h1>Menu sushi</h1>
      <table>
        <thead>
          <tr>
            <th>ID Order</th>
            <th>ID Client</th>
            <th>ID Picker</th>
            <th>Order State</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="order-list">
          ${tableContent}
        </tbody>
      </table>
    `;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}