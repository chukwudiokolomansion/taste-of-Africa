function FoodForm({ formData, handleChange, handleSubmit, buttonText }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Food name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={formData.imageUrl}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <button type="submit">{buttonText}</button>
    </form>
  );
}

export default FoodForm;