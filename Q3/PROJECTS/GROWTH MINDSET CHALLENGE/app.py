# streamlit
import streamlit as st 

st.set_page_config(page_title="Growth Mindset Project", page_icon="✺")
st.title("Growth Mindset Challenge : Web App With Streamlit")

st.header("🚀 Welcome to Your Growth Journey!")
st.write("Embrace challenges, learn from mistakes, and keep growing. Unlock your full potential. This AI-powered app will help you develop a growth mindset and achieve your goals!🌫") 

st.header("💡 Today's Growth Mindset Quote")
st.write("Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill")

st.header("🔧 What's Your Challenge Today?")
user_input = st.text_input("Describe a challenge you are facing:")

if user_input:
    st.success(f"You're facing: {user_input}. Keep pushing forward towards your goal! 🚀")
    
    st.header("🔍 Reflect on Your Learning")
    reflection = st.text_area("Write your reflection here:")

    if reflection:
        st.success(f"🌟 Great Insight! Your Reflection: {reflection}")
    else:
        st.info("Reflecting on past experiences can help you grow! Share your difficulties.")
else:
    st.warning("Tell me about your challenge to get started!")

st.header("🏆 Celebrate Your Wins!")
achievement = st.text_input("Share something you have recently accomplished:")

if achievement:
    st.success(f"🌠 Amazing! You Achieved: {achievement}. Keep up the good work! 🌟")
else:
    st.info("Big or small, every achievement counts! Share your wins 😃")

st.write("---")
st.write("Keep believing in yourself and never give up. Growth is a journey, not a destination. 🌟")
st.write("**© Created By Muhammad Bin Zaheer**")
