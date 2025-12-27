# Image Uploader

React 와 Typescript 를 사용하여 이미지를 업로드하고 업로드한 이미지를 리스트화 시키는 프로젝트입니다.

## 주요기능

### 1. 이미지 업로드 + 미리보기

- 이미지를 선택하면 미리보기 이미지가 나타납니다.

### 2. 이미지 등록

- 이미지를 등록하면 하단에 리스트로 나열합니다.

## 폴더구조

```
src/
 ├── index.css
 ├── main.tsx
 ├── App.css
 ├── App.tsx
 │
 ├── components/
 │     ├── Header.tsx
 │     ├── ImageList.tsx
 │     ├── ImagePreview.tsx
 │     └──ImageUploader.tsx
 │
 ├── hooks/
 │     └──useImageList.tsx    // 이미지 리스트 로직
 │
 └──
```

## 실행방법

```
npm run dev
```

## 앞으로 추가해야 할 작업

- 이미지 삭제 버튼 추가
- 드래그&드랍 기능 추가
- 등록된 이미지 저장 기능 추가(로컬스토리지)
- UI 정리
