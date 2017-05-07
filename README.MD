## USAGE

- Install [Webtask](https://webtask.io/cli)

- Clone this repository

- Install dependencies
    ```
      npm i
    ```

- Run + Deploy
    ```
        wt create index --secret MONGO_URL=<MONGO_URL> --secret CL_CLOUD_NAME=<CLOURINARY_CLOUD_NAME> --secret CL_API_KEY=<CLOURINARY_API_KEY> --secret CL_SECRET=<CLOURINARY_API_SECRET> --bundle --watch
    ```

You can use [MongoLab](https://mlab.com) for MongoDB storage. [Sign up for free on Cloudinary](https://cloudinary.com/users/register/free) for the credentials

Once above command deploys and watches for changes. Use the deploy URL as **endpoints** for your client app:

- **GET /images**: List images

- **POST /images**: Upload Image
    - name: file

**Feel free to fork and extend if you need more endpoints**