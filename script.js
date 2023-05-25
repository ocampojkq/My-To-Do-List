$(document).ready(function () {
  // Add task
  $("#addTaskBtn").on("click", function () {
    var task = $("#taskInput").val().trim();
    if (task !== "") {
      var listItem = $("<li>").text(task);
      var checkbox = $("<input>").attr("type", "checkbox");
      var deleteBtn = $("<span>")
        .addClass("delete-btn")
        .html('<i class="fas fa-trash"></i>');

      listItem.prepend(checkbox);
      listItem.append(deleteBtn);
      $(".task-list").append(listItem);
      $("#taskInput").val("");
    }
  });

  // Remove task
  $(document).on("click", ".delete-btn", function () {
    $(this).parent().remove();
  });

  // Mark task as completed
  $(document).on("change", ".task-list input[type='checkbox']", function () {
    var listItem = $(this).parent();
    if (this.checked) {
      listItem.addClass("completed");
    } else {
      listItem.removeClass("completed");
    }
  });
});
