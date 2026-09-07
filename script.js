function openModal(id) {
  const modal = document.getElementById(id);

  if (modal) {
    modal.classList.add("active");
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);

  if (modal) {
    modal.classList.remove("active");
  }
}

function choosePlan(plan) {
  document.getElementById("selectedPlan").textContent = plan;
  openModal("orderModal");
}

function submitOrder(event) {
  event.preventDefault();

  alert(
    "Đã nhận yêu cầu!\n\n" +
    "Đây là bản demo frontend. " +
    "Khi kết nối backend, yêu cầu sẽ được lưu thành đơn hàng."
  );

  closeModal("orderModal");
}

function login(event) {
  event.preventDefault();

  alert(
    "Đăng nhập demo thành công!"
  );

  closeModal("loginModal");
}

function demoLogin() {
  alert(
    "Đang đăng nhập tài khoản demo..."
  );

  closeModal("loginModal");
}

function toggleFaq(button) {
  const item = button.parentElement;

  item.classList.toggle("active");

  const icon = button.querySelector("span");

  if (item.classList.contains("active")) {
    icon.textContent = "−";
  } else {
    icon.textContent = "+";
  }
}

/* Click ra ngoài modal để đóng */

document.querySelectorAll(".modal").forEach(modal => {

  modal.addEventListener("click", function(event) {

    if (event.target === modal) {
      modal.classList.remove("active");
    }

  });

});

/* ESC để đóng modal */

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {

    document.querySelectorAll(".modal").forEach(modal => {
      modal.classList.remove("active");
    });

  }

});
