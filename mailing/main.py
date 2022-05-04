import requests
import json
import selenium
from selenium import webdriver
import datetime

import smtplib
from email.message import EmailMessage
# import imghdr
import re

from bs4 import BeautifulSoup

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465
smtp = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
smtp.login("id", "pw")
message = EmailMessage()

# 크롤링 API
def save_fav(url, tag, class_name, chrome_driver_path):
    driver = webdriver.Chrome(executable_path=chrome_driver_path)
    driver.get(url = url)
    response = driver.page_source.encode('utf-8', errors='replace')
    soup = BeautifulSoup(response, 'html.parser')
    rank = 1

    results = soup.findAll(tag, class_name)

    search_rank_file = open("rankresult.txt","a")

    # 실시간 검색어 txt 파일 만들기
    search_rank_file.write(datetime.datetime.today().strftime("%Y년 %m월 %d일의 실시간 검색어 순위입니다.\n".encode('unicode-escape').decode()).encode().decode('unicode-escape'))
    for result in results:
        search_rank_file.write(str(rank)+"위:"+result.get_text()+ "\n")
        rank += 1


def send_email(addr):
    reg = "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$"
    if bool(re.match(reg, addr)):
        smtp.send_message(message)
        print("정상적으로 메일이 발송되었습니다.")
    else:
        print("유효한 이메일 주소가 아닙니다.")


user_info = []


def picker():
    print("------------- 멋쟁이 사자처럼 전화번호부 -------------")
    print("-----1" + ") 추가 2" + ") 조회 3" + ") 수정 4" + ") 삭제 5" + ") 메일 전송 q" + ") 종료 -----")
    print("---------------------------------------------------------------")
    num = input("원하시는 메뉴를 입력해주세요: ")
    if num == "1":
        adder()

    elif num == "2":
        searcher()
    elif num == "3":
        edit()
    elif num == "q":
        exit()
    elif num == "4":
        delete_user()
    elif num == "5":
        mailing()
    else:
        print("wrong input")
        picker()


def adder():
    name = input("이름을 입력해주세요 : ")
    individual = {'이름': name, '전화번호': '', '메일': ''}
    pn = input(individual['이름'] + "님의 번호를 입력해주세요 : ")
    mail = input(individual['이름'] + "님의 메일을 입력해주세요 : ")
    individual['전화번호'] = pn
    individual['메일'] = mail
    user_info.append(individual)
    picker()


def searcher():
    cnt = False
    search_name = input("조회를 원하는 이름을 입력해주세요 : ")
    for i in user_info:
        if i['이름'] == search_name:
            print(i)
            cnt = True

    if cnt == False:
        print("그런사람은 없습니다")

    picker()


def edit():
    test1 = False
    test2 = False
    edit_name = input("수정을 원하는 이름을 입력해주세요 : ")
    for i in user_info:
        if i['이름'] == edit_name:
            test1 = True

            edit_context = input("수정을 원하는 항목과 내용을 입력해주세요 :")
            edit_context_list = edit_context.split()
            if edit_context_list[0] == '메일':
                i[edit_context_list[0]] = edit_context_list[1]
                test2 = True
                break
            if edit_context_list[0] == '전화번호':
                i[edit_context_list[0]] = edit_context_list[1]
                test2 = True
                break

        if test1 and test2 != True:
            print("오류발생!")

    picker()


def delete_user():
    del_name = input("삭제를 원하는 이름을 입력해주세요 : ")
    for i in user_info:
        if i['이름'] == del_name:
            del i['이름']
            del i['전화번호']
            del i['메일']

    picker()


def mailing():
    save_fav("http://www.daum.net/", 'a', 'link_favorsch', "./chromedriver.exe")
    city = "Seoul"
    apikey = "key"
    lang = "kr"

    api = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={apikey}&lang={lang}&units=metric"

    result = requests.get(api)
    data = json.loads(result.text)

    with open("rankresult.txt", "rb") as text:
        text_file = text.read()


    message.add_attachment(text_file,maintype='text',subtype='txt', filename=text.name)

    mail_name = input("메일 전송을 원하는 사람의 이름을 입력해주세요 : ")
    for i in user_info:
        if i['이름'] == mail_name:
            mail_to = i['메일']
            location = data["name"]
            #message setcontent 내부내용 문자열로 작성하면 문자 전송 가능. 정해진 형태 content에 넣는 방법
            incontent = str(data["name"]) + "의 날씨입니다.\n" + "날씨는 " + str(data["weather"][0]["description"]) + "입니다.\n" + "현재 온도는 " + str(data["main"]["temp"]) + "입니다.\n" + "하지만 체감 온도는 " + str(data["main"]["feels_like"]) + "입니다.\n"
           # content = f"{data["name"]}의 날씨입니다.\n" + "날씨는 " + {data["weather"][0]["main"]} + "입니다.\n" + "현재 온도는 " + {data["main"]["temp"]} + "도 입니다.\n" + "하지만 체감 온도는 " + {data["main"]["feels_like"]} + "도 입니다.")
            message.set_content(incontent)

            message["Subject"] = "메일 보내기 과제."
            message["From"] = "ghtkdrla321@gmail.com"
            message["To"] = mail_to

            # 메일을 보내는 sendEmail 함수를 호출해서 실행해보기
            #smtp.send_message(message)
            send_email(mail_to)
            smtp.quit()
    picker()


picker()
