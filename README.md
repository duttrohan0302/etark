# Documentation for ETark Assignment
## Basic Backend Auth

### Running the App  
#### Create a .env file in the root folder with the following content  
<pre>
  MONGOURI = "Enter your mongodb URI here"  
  SECRETORKEY = "Enter the unique secretOrKey for JWT"   
</pre>
Now, in the root directory, run 
<pre>
  npm install
</pre>
Then run
<pre>
  npm run dev
</pre>

## Routes

### USER Routes

1. Create/Signup User  
  @type    POST  
  @route   /signup  
  @desc    Register the user  
  @access  Public  
  
2. Login User   
  @type    POST  
  @route   /login  
  @desc    Register the user  
  @access  Public  
  
3. Get Current user  
  @type    GET  
  @route   /home   
  @desc    Get current user(from JWT and Passport Auth)   
  @access  Private  
