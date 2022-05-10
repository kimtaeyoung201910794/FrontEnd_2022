user_info = []


def picker():
    print("------------- 멋쟁이 사자처럼 전화번호부 -------------")
    print("-----1" + ") 추가 2" + ") 조회 3" + ") 수정 4" + ") 삭제 q" +") 종료 -----")
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
    else:
        print("wrong input")
        picker()
        
def adder():
    name = input("이름을 입력해주세요 : ")
    individual = {'이름' : name, '전화번호' : '', '메일' : ''}
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
            if edit_context_list[0] == ('메일'):
                i[edit_context_list[0]] = edit_context_list[1]
                test2 = True
                break
            if edit_context_list[0] == ('전화번호'):
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
    
picker()
    
    
            
            
        


    
    
    
    
    
    
