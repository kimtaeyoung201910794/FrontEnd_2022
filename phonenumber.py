total_list=[]

while True:
    
    print("\n")
    print("--------🦁멋쟁이 사자처럼 전화번호부 🦁---------\n--------1)추가 2)조회 3)수정 4)삭제 q)종료-------\n----------------------------------------------------")
    print("\n")

    menu=input("원하시는 메뉴를 입력해주세요:")
    if menu =="1":
        name=input("이름을 입력해주세요:")
        number=input(name+"님의 번호를 입력해주세요:")
        mail=input(name+"님의 메일을 입력해주세요:")
        total_list.append({"이름": name,"전화번호":number, "메일":mail})
       
   
    elif menu=="2":
        search_name=input("조회를 원하는 이름을 입력해주세요")
        for search_name2 in total_list:
            if search_name==search_name2["이름"]:
                print(search_name2)

    elif menu =="3":
        search_name=input("수정을 원하는 이름을 적어주세요:")
        list, change=input("수정을 원하는 항목과 이름을 입력해주세요:").split()
        for search_name2 in total_list:
            if search_name==search_name2["이름"]:
                search_name2[list]=change
    
    elif menu =="4":
        search_name=input("삭제를 원하는 이름을 입력해주세요")
        for search_name2 in total_list:
            if search_name==search_name2["이름"]:
                total_list.remove(search_name2)
    
    elif menu=="q":
        break

    else:
        print("다시 입력해주세요")


