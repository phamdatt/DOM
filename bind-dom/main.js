const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
  const cars = ["BWM"];
  const rootElement = $("#root");
  const inputElement = $("#input");
  const submit = $("#submit");

  return {
    add(car) {
      cars.push(car);
    },
    delete(index) {
      cars.splice(index, 1);
    },
    render() {
      const html = cars
        .map(
          (item, index) => `
        <li>${item}
        <span class="delete" data-index="${index}">&times</span>
        </li>
        `
        )
        .join("");
      rootElement.innerHTML = html;
    },
    handleDelete(e) {
      const deleteBtn = e.target.closest(".delete");
      if (deleteBtn) {
        const index = deleteBtn.dataset.index;
        this.delete(index);
        this.render()
      }
    },
    init() {
      const _this = this;
      submit.onclick = function () {
        const car = inputElement.value;
        _this.add(car);
        _this.render();
        inputElement.value = null;
        inputElement.focus();
      };
      rootElement.onclick = this.handleDelete.bind(this);
      _this.render();
    },
  };
})();

app.init();
