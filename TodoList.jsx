import React, { Component } from "react";
import { FaClipboardCheck } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      todos: [],
    };
  }

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  addTodo = () => {
    if (this.state.task.trim() === "") return;

    this.setState({
      todos: [...this.state.todos, this.state.task],
      task: "",
    });
  };

  deleteTodo = (index) => {
    const updatedTodos = this.state.todos.filter((_, i) => i !== index);
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>
          <FaClipboardCheck style={styles.icon} />
          Todo List
        </h2>

        <div style={styles.inputBox}>
          <input
            type="text"
            value={this.state.task}
            onChange={this.handleChange}
            onKeyDown={(e) => e.key === "Enter" && this.addTodo()}
            placeholder="Enter a task"
            style={styles.input}
          />

          <button
            onClick={this.addTodo}
            style={styles.addBtn}
            disabled={!this.state.task.trim()}
          >
            Add
          </button>
        </div>

        <ul style={styles.list}>
          {this.state.todos.map((todo, index) => (
            <li key={index} style={styles.listItem}>
              <span>{todo}</span>
              <button
                onClick={() => this.deleteTodo(index)}
                style={styles.deleteBtn}
              >
                <RxCross1 />

              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  container: {
    width: "320px",
    margin: "60px auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial",
    border: "1px solid #ffffffff",
    borderRadius: "10px",
    backgroundColor: "#000000ff",
  },
  heading: {
    marginBottom: "20px",
  },
  icon: {
    color: "green",
    marginRight: "8px",
  },
  inputBox: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    width: "65%",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  addBtn: {
    padding: "8px 12px",
    marginLeft: "6px",
    cursor: "pointer",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#28a745",
    color: "#ffffffff",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    background: "#13340eff",
    padding: "8px 10px",
    borderRadius: "5px",
  },
  deleteBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default ToDoList;
