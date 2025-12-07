import streamlit as st

st.set_page_config(page_title="My Streamlit App", page_icon=":guardsman:", layout="wide")
st.title("Welcme To My First Python Website")

st.sidebar.title("Navigation")
page =st.sidebar.radio("Go to", ("Home", "About", "Contact"))

if page == "Home":
    st.header("Home Page")
    st.write("This is the home page built with python and streamlit.")
    name = st.text_input("What's your name")
    if name:
        st.success(f"Hello, {name}! Thanks for visiting")
    else:
        st.write("Please enter your name.")
elif page == "About":
    st.header("About Page")
    st.write("This website is built entirely using Python and Streamlit in under 15 minutes.")

elif page == "Contact":
    st.header("Contact Us")
    email = st.text_input("Email")
    message = st.text_input("Your Message.")
    if st.button("Submit"):
        st.success("Thank you. we have recieved your message!")

