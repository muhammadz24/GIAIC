import streamlit as st

st.title("🌍 Unit Converter App")
st.markdown("### Converts Length, Weight, and Time Instantly")

st.write("Welcome! Select a category, enter a value, and get the converted result in real-time")
category = st.selectbox("Choose a Category", ["Length", "Weight", "Time"])

if category == "Length":
    unit = st.selectbox("📏 Select Conversion", ["Kilometers to miles", "Miles to kilometers"])
elif category == "Weight":
    unit = st.selectbox("⚖️ Select Conversion", ["Kilograms to pounds", "Pounds to kilograms"])
elif category == "Time":
    unit = st.selectbox("⏲️ Select Conversion", ["seconds to minutes", "minutes to seconds", "minutes to hours", "hours to minutes", "hours to days", "days to hours"])

value = st.number_input("Enter Value")

def convert_units(category, value, unit):
    if category == "Length":
        if unit == "Kilometers to miles":
            return value * 0.621371
        elif unit == "Miles to kilometers":
            return value / 0.621371

    elif category == "Weight":
        if unit == "Kilograms to pounds":
            return value * 2.20462
        elif unit == "Pounds to kilograms":
            return value / 2.20462

    elif category == "Time":
        if unit == "seconds to minutes":
            return value / 60
        elif unit == "minutes to seconds":
            return value * 60
        elif unit == "minutes to hours":
            return value / 60
        elif unit == "hours to minutes":
            return value * 60
        elif unit == "hours to days":
            return value / 24
        elif unit == "days to hours":
            return value * 24

    return None  # Ensure function always returns something

if st.button("Convert"):
    result = convert_units(category, value, unit)
    
    if result is not None:
        st.success(f"The result is {result:.2f}")
  
