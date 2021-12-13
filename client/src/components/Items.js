import React, { Component } from 'react';
import {addItem, getItems, updateItem, deleteItem} from '../services/itemServices';

class Items extends Component {
    state = {items: [], currentItem: ""};

    async componentDidMount() {
        try {
            const { data } = await getItems();
            this.setState({items: data});
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = ({ currentTarget: input }) => {
        this.setState({ currentItem: input.value })
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const originalItems = this.state.items;
        try {
            const { data } = await addItem({ item: this.state.currentItem });
            const items = originalItems;
            items.push(data);
            this.setState({ items, currentItem: "" });
        } catch(error) {
            console.log(error);
        }
    };

    handleUpdate = async (currentItem) => {
        const originalItems = this.state.items;
        try {
            const items = [...originalItems];
            const index = items.findIndex((item) => item._id === currentItem);
            items[index] = { ...items[index]};
            items[index].crossedOut = !items[index].crossedOut;
            this.setState({ items });
            await updateItem(currentItem, {
                crossedOut: items[index].crossedOut
            });
            } catch (error) {
                this.setState({ items: originalItems });
                console.log(error);
            }
    };

    handleDelete = async (currentItem) => {
        const originalItems = this.state.items;
        try {
            const items = originalItems.filter(
                (item) => item._id !== currentItem
            );
            this.setState({ items });
            await deleteItem(currentItem);
        } catch(error) {
            this.setState({ items: originalItems});
            console.log(error);
        }
    };
}

export default Items;

