<?php

namespace App\Console\Commands;

use App\Interface\LoginInterface;
use Exception;
use Illuminate\Console\Command;

class UpdateAllSocialData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:all';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';
    private LoginInterface $loginService;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(LoginInterface $loginService)
    {
        parent::__construct();

        $this->loginService = $loginService;
    }

    public function handle()
    {
        try {
            $this->loginService->updateInstagramUsers();
            echo 'instagram users updated-----------';
        } catch (Exception $exception){
            dd($exception->getMessage(), 'instagram');
        }
        try {
            $this->loginService->updateTelegramUser();
            echo 'telegram channels updated-----------';
        } catch (Exception $exception){
            dd($exception, 'telegram');
        }
        try {
            $this->loginService->updateTiktokUsers();
            echo 'tiktok users updated-----------';
        } catch (Exception $exception){
            dd($exception->getMessage(), 'tiktok');
        }
        try {
            $this->loginService->updateTwitterUsers();
            echo 'twitter users updated-----------';
        } catch (Exception $exception){
            dd($exception->getMessage(), 'twitter');
        }
        try {
            $this->loginService->updateYoutubeUser();
            echo 'youtube channels updated-----------';
        } catch (Exception $exception){
            dd($exception->getMessage(), 'youtube');
        }

        return true;
    }
}
