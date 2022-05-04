from datetime import datetime

import requests
import smtplib
from email.message import EmailMessage
import imghdr
import re
import json

from bs4 import BeautifulSoup
from selenium.webdriver.chrome import webdriver



SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465

total_list = []

while True:

    print("\n")
    print(
        "--------🦁멋쟁이 사자처럼 전화번호부 🦁---------\n--------1)추가 2)조회 3)수정 4)삭제 5)메일 전송 q)종료-------\n----------------------------------------------------")
    print("\n")

    menu = input("원하시는 메뉴를 입력해주세요:")
    if menu == "1":
        name = input("이름을 입력해주세요:")
        number = input(name + "님의 번호를 입력해주세요:")
        mail = input(name + "님의 메일을 입력해주세요:")
        total_list.append({"이름": name, "전화번호": number, "메일": mail})



    elif menu == "2":
        search_name = input("조회를 원하는 이름을 입력해주세요")
        i = 0
        for search_name2 in total_list:
            if search_name == search_name2["이름"]:
                print(search_name2)
                i = 1
        if i == 1:
            print("조회되었습니다")
        elif i == 0:
            print("존재하지않습니다")

    elif menu == "3":
        search_name = input("수정을 원하는 이름을 적어주세요:")
        list, change = input("수정을 원하는 항목과 이름을 입력해주세요:").split()
        for search_name2 in total_list:
            if search_name == search_name2["이름"]:
                search_name2[list] = change

    elif menu == "4":
        search_name = input("삭제를 원하는 이름을 입력해주세요")
        i = 0
        for search_name2 in total_list:
            if search_name == search_name2["이름"]:
                total_list.remove(search_name2)
                i = 1
                break
        if i == 1:
            print("삭제되었습니다")

        elif i == 0:
            print("존재하지않습니다")

    elif menu == "5":
        search_name = input("메일 전송을 원하는 사람의 이름을 입력해주세요 : ")
        for search_name2 in total_list:
            if search_name == search_name2["이름"]:
                city = "Seoul"
                API = "0c63679ea2a41b66c4a0fc292d85dffd"
                lang = "kr"
                api = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API}&lang={lang}&units=metric"
                result = requests.get(api)
                data = json.loads(result.text)
                message = EmailMessage()


                message.set_content(data["name"] + "의 날씨입니다\n"+ "날씨는" + data["weather"][0]["description"] + "입니다\n"+"현재온도는"+str(data["main"]["temp"])+"입니다\n"+"하지만 체감온도는 "+str(data["main"]["feels_like"])+"입니다")
                message["Subject"] = "오늘의 날씨"
                message["From"] = "gtaeyeong986@gmail.com"
                message["To"] = mail

                print("메일을 성공적으로 보냈습니다")


                # def save_fav(url, tag, class_name, chrome_driver_path):
                #     driver = webdriver.Chrome(executable_path=chrome_driver_path)
                #     driver.get(url=url)
                #     response = driver.page_source.encode('utf-8', errors='replace')
                #     soup = BeautifulSoup(response, 'html.parser')
                #     rank = 1
                #
                #     results = soup.findAll(tag, class_name)
                #
                #     search_rank_file = open("rankresult.txt", "a")
                #
                #     search_rank_file.write(datetime.today().strftime("%Y년 %m월 %d일의 실시간 검색어 순위입니다.\n"))
                #     for result in results:
                #         search_rank_file.write(str(rank) + "위:" + result.get_text() + "\n")
                #         rank += 1

                # with open("rankresult.txt", "r") as text:
                #     text_file = text.read()
                #
                # message.add_attachment(text_file.read(), maintype='text', subtype='txt')#filename=text_file.name)
                smtp = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
                smtp.login("gtaeyeong986@gmail.com", "glory76tymj1!")

                smtp.send_message(message)

                smtp.quit()






    elif menu == "q":
        break

    else:
        print("다시 입력해주세요")

