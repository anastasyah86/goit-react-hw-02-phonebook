import { Component } from 'react';
import styles from './PhoneBook.module.css';

class PhoneBookForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.name);
    this.reset();
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
    this.setState({ contacts: [].push(name) });
  };

  reset = () => {
    this.setState({ name: '' });
  };
  render() {
    return (
      <form className={styles.form}>
        <label className={styles.label}> Name </label>
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <button onSubmit={this.handleSubmit} className={styles.button}>
          Add
        </button>
      </form>
    );
  }
}
export default PhoneBookForm;
