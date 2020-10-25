const form = document.querySelector('form')
const ul = document.querySelector('#list')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  let productInput = form.elements.product
  let qtyInput = form.elements.qty

  addNewItem(productInput.value, qtyInput.value)

  productInput.value = ''
  qtyInput.value = ''
})

function addNewItem(product, qty) {
  const li = document.createElement('li')
  li.innerText = `${product} - ${qty}`

  ul.append(li)
}
