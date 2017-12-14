<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table( 'users' )->delete();
        \DB::table( 'users' )->insert([
            'name' => 'Kshitij sharma',
            'email' => 'kshtjsharma68@gmail.com',
            'password' => bcrypt('password'),
            'remember_token' => str_random(30)
        ]);
    }
}
