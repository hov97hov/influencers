<?php

namespace App\Admin\Controllers;

use App\Interface\RapidApiInterface;
use App\Models\Category;
use App\Models\User;
use App\Service\LoginService;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class AdminRegisteredUserController extends AdminController
{
    private RapidApiInterface $rapidApiService;

    public function __construct(RapidApiInterface $rapidApiService)
    {
        $this->rapidApiService = $rapidApiService;
    }

    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Register Users';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new User());

        $grid->column('id', __('ID'))->sortable();
        $grid->column('name', __('NAME'))->sortable();
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));
        $grid->column('status', __('Status'))->display(function ($status) {
            return $status ? 'Active' : 'Inactive';
        });
        $grid->model()->where('status', false);
        $grid->disableCreateButton();

        return $grid;
    }

    /**
     * @param $id
     * @return Show
     */
    protected function detail($id): Show
    {
        $show = new Show(User::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('name', __('NAME'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form(): Form
    {
        $form = new Form(new User());

        $form->radio('status', __('Status'))
            ->options([1 => 'Confirm', 0 => 'Cancel']);

        $form->text('userDetail.first_name', __('First Name'))->required();
        $form->text('userDetail.last_name', __('Last Name'))->required();
        $form->mobile('userDetail.phone', __('Phone'))->required();
        $form->email('email', __('Email'))->required();
        $form->text('userDetail.influencer_name', __('Influencer name'))->required();
        $form->text('userDetail.facebook', __('Facebook username'));
        $form->text('userDetail.instagram', __('Instagram username'));
        $form->text('userDetail.tiktok', __('Tiktok username'));
        $form->text('userDetail.youtube', __('Youtube channel ID'));
        $form->text('userDetail.twitter', __('Twitter username'));
        $form->text('userDetail.telegram', __('Telegram username'));
        $form->multipleSelect('categories')
            ->options(Category::all()
                ->pluck('name', 'id'))->required();
        $form->select('userDetail.account_type', __('Account type'))
            ->options([0 => 'Not verifed', 1 => 'Verifed'])->required();
        $form->text('userDetail.gender', __('Gender'))->required();
        $form->date('userDetail.birthday', __('Birthday'))->required();
        $form->text('userDetail.language', __('Language'))->required();
        $form->textarea('userDetail.additional_information', __('Additional information'))->required();

        $form->saved(function (Form $form) {
            (new LoginService($this->rapidApiService))->createUserSocialMedia($form->userDetail, $form->model()->id);
        });

        return $form;
    }
}
