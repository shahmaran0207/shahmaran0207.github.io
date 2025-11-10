#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# CSS 파일에서 1080px 이하 미디어 쿼리를 새로운 것으로 교체하는 스크립트

# 기존 CSS 파일 읽기
with open('html/css/styles.css', 'r', encoding='utf-8') as f:
    content = f.read()

# 새로운 미디어 쿼리 읽기
with open('html/css/responsive-queries.txt', 'r', encoding='utf-8') as f:
    new_queries = f.read()

# 1080px 이하 미디어 쿼리 시작 위치 찾기
start_marker = '@media  (max-width: 430px) {'
end_marker = '@media (min-width: 1081px) and  (max-width: 1280px) {'

start_index = content.find(start_marker)
end_index = content.find(end_marker)

if start_index == -1 or end_index == -1:
    print("미디어 쿼리 마커를 찾을 수 없습니다.")
    exit(1)

# 새로운 내용 생성
new_content = content[:start_index] + new_queries + '\n\n' + content[end_index:]

# 파일 저장
with open('html/css/styles.css', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("CSS 파일이 성공적으로 업데이트되었습니다!")
print(f"- 기존 미디어 쿼리 제거: {start_index}번째 문자부터 {end_index}번째 문자까지")
print(f"- 새로운 미디어 쿼리 추가: {len(new_queries)} 문자")
