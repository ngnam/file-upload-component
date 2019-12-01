# File upload component

## Server

- Infrastructure Entities
    - file.model.ts (file model)
        - _id
        - fileName
        - createdDate
        - deletedDate
        - size
        - type
        - host
        - exp_time
        - status
        - countView
        - countDownload
        - linkShare
        - emailShare

    - report.model.ts (report model)
        - id
        - fullName
        - email
        - createdDate
        - content
        - status (report xấu/tốt/nội dung spam khiêu dâm)

    - user
        - id
        - firstName
        - lastName
        - email
        - userName
        - address
        - phoneNumber
        - passwordHash
        - lastPasswordHash
        - countLock
        - countChangePass
        - createdDate
        - updatedDate
        - deletedDate

    - user_file
        - id
        - user_id
        - file_id
                
    - report_file
        - id
        - report_id
        - file_id

    - relations
        - user one_to_many file
        - file many_to_one report

- Setting up a new projects

    - `npm init`: Init project with package.json then create the following files in the project directory: server.js, upload.js
    - External dependencies: create API: `npm install express --save` 
    - Allow cross-origin requests: `npm install cors --save`
    - Library support uploading files in the multipart/form-data format: `npm install formidable --save`
    

## Client in Angular
