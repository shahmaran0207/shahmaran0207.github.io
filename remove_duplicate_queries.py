#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# CSS 파일에서 중복된 미디어 쿼리 제거

# 기존 CSS 파일 읽기
with open('html/css/styles.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 2362번 라인부터 3222번 라인까지 제거 (인덱스는 0부터 시작하므로 -1)
# 2361 (인덱스 2360)부터 3222 (인덱스 3221)까지
start_line = 2361  # @media (min-width: 913px) 시작
end_line = 3222    # @media (min-width: 1081px) 시작

# 새로운 내용 생성 (중복 부분 제거)
new_lines = lines[:start_line] + lines[end_line:]

# 파일 저장
with open('html/css/styles.css', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("중복된 미디어 쿼리가 성공적으로 제거되었습니다!")
print(f"- 제거된 라인: {start_line+1}번째부터 {end_line}번째까지 ({end_line - start_line}줄)")
print(f"- 새로운 파일 라인 수: {len(new_lines)}줄")
