class Task {
    constructor(content, status) {
      this.content = content;
      this.status = status;
    }
  
    static fromJSON(json) {
      return new Task(
        json.content,
        json.status
      );
    }
  }
  
  class UI {
    constructor() {
      this.form = document.getElementById('form');
  
      this.content = document.getElementById('content-input');
  
      this.tableBody = document.getElementById('table-body');
  
      this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
  
      this.tasks = [];
      this.loadTasksFromLocalStorage();
      this.renderTaskTable();
    }
  
    onFormSubmit(e) {
      e.preventDefault();
      
      const task = new Task(
        this.content.value,
        "uncompleted",
      );
  
      this.tasks.push(task);
  
      this.saveTasksToLocalStorage();
      this.renderTaskTable();

      this.content.value = "";
    }
  
    renderTaskTable() {
      this.tableBody.innerHTML = '';
  
      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
  
        const tr = this.createTaskTableRow(task);
        this.tableBody.appendChild(tr);
      }
    }
  

    createTaskTableRow(task) {
      const tr = document.createElement('tr');
  
      const tdContent = document.createElement('td');
      const tdStatus = document.createElement('td');
      const tdActions = document.createElement('td');
  
      tdContent.innerHTML = task.content;
      tdStatus.innerHTML = task.status;
  
      const buttonGroup = document.createElement("div");
      buttonGroup.classList.add("btn-group");
      if (task.status !== "Completed") {
        const completeButton = this.createCompleteButtion(task);
        buttonGroup.appendChild(completeButton);
      }
      
      const removeButton = this.createRemoveTaskButton(task);
      buttonGroup.appendChild(removeButton);
      tdActions.appendChild(buttonGroup);
  
      tr.appendChild(tdContent);
      tr.appendChild(tdStatus);
      tr.appendChild(tdActions);
  
      return tr;
    }
  
    createCompleteButtion(task) {
        const button = document.createElement('button');

        button.setAttribute('class', 'btn btn-success btn-sm');
        button.innerHTML = 'Complete';
        button.addEventListener("click", (e) => {
            task.status = "Completed"; 
            this.saveTasksToLocalStorage();
            this.renderTaskTable();
        });

        return button;
    }

    createRemoveTaskButton(task) {
      const button = document.createElement('button');
  
      button.setAttribute('class', 'btn btn-danger btn-sm');
      button.innerHTML = 'X';
      button.addEventListener('click', () => this.onRemoveTaskClicked(task));
  
      return button;
    }
  
    onRemoveTaskClicked(task) {
      this.tasks = this.tasks.filter((x) => {
        return task.content !== x.content;
      });
  
      this.saveTasksToLocalStorage();
      this.renderTaskTable();
    }
  
    saveTasksToLocalStorage() {
      const json = JSON.stringify(this.tasks);
      localStorage.setItem('tasks', json);
    }
  
    loadTasksFromLocalStorage() {
      const json = localStorage.getItem('tasks');
      if (json) {
        const taskArr = JSON.parse(json);
        this.tasks = taskArr.map(x => Task.fromJSON(x));
      }
    }
  }
  
  const ui = new UI();